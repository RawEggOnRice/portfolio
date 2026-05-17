// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import eslintConfigPrettier from 'eslint-config-prettier';
import boundaries from 'eslint-plugin-boundaries';
import storybook from 'eslint-plugin-storybook';
import { defineConfig, globalIgnores } from 'eslint/config';

// アーキテクチャ定義 (レイヤー順位)
const LAYER_ORDER = [
  ['views'], // 1
  ['components'], // 2
  ['providers'], // 3
  ['hooks'], // 4
  ['apis'], // 5
  ['utils'], // 6
  ['animations', 'contexts'], // 7 (同位: 相互参照禁止)
  ['types'], // 8
  ['schemas'], // 9
  ['themes'], // 10
  ['constants'], // 11
];

/** レイヤールールの生成 */
const generateLayerRules = () => {
  const rules = [];

  LAYER_ORDER.forEach((currentLayers, index) => {
    /** 現在のレイヤーより上位のレイヤーを取得 */
    const strictlyUpperLayers = LAYER_ORDER.slice(0, index).flat();

    currentLayers.forEach((currentLayer) => {
      /** 現在のレイヤーの兄弟レイヤーを取得 */
      const siblingLayers = currentLayers.filter((siblingLayer) => siblingLayer !== currentLayer);

      /** 禁止するレイヤーを定義 */
      const prohibitedLayers = [...strictlyUpperLayers, ...siblingLayers];

      // ルールの生成をしてプッシュ
      if (prohibitedLayers.length > 0) {
        rules.push({
          from: { captured: { layer: currentLayer } },
          disallow: { to: { captured: { layer: prohibitedLayers } } },
          message: `[Architecture] レイヤー違反: ${currentLayer} は、上位または同位のレイヤー (${prohibitedLayers.join(', ')}) を参照できません。`,
        });
      }
    });
  });

  return rules;
};

const eslintConfig = defineConfig([
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    'public/mockServiceWorker.js',
  ]),

  ...nextVitals,
  ...nextTs,
  ...storybook.configs['flat/recommended'],
  eslintConfigPrettier,
  {
    plugins: { boundaries },
    settings: {
      'boundaries/include': ['src/**/*'],
      'boundaries/elements': [
        { type: 'app', pattern: 'src/app/**' },
        { type: 'shared', pattern: 'src/shared/*/**', capture: ['layer'] },
        { type: 'features', pattern: 'src/features/*/*/**', capture: ['domain', 'layer'] },
      ],
    },
    rules: {
      // アーキテクチャルールの適用
      'boundaries/dependencies': [
        'error',
        {
          default: 'allow',
          message:
            '[Architecture] ドメイン違反: {{from.type}} から {{to.type}} への参照は禁止されています。',
          rules: [
            {
              from: { type: 'shared' },
              disallow: { to: { type: ['app', 'features'] } },
            },
            {
              from: { type: 'features' },
              disallow: { to: { type: 'app' } },
            },
            {
              from: { type: 'features' },
              disallow: {
                to: { type: 'features', captured: { domain: '!${from.captured.domain}' } },
              },
              message:
                '[Architecture] ドメイン違反: 他のドメイン ({{from.type}}/{{to.captured.domain}}) への参照は禁止されています。共通化する場合は shared へ移動してください。',
            },
            ...generateLayerRules(),
          ],
        },
      ],
    },
  },
]);

export default eslintConfig;
