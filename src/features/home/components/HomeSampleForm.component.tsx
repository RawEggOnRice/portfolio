import {
  HomeSampleFormInput,
  HomeSampleFormOutput,
  homeSampleFormSchema,
} from '@/features/home/schemas/homeSampleForm.schema';
import DefaultForm from '@/shared/components/form/DefaultForm.component';
import ControlledNumberTextField from '@/shared/components/input/ControlledNumberTextField.component';
import ControlledTextField from '@/shared/components/input/ControlledTextField.component';
import { LABELS } from '@/shared/constants/labels.constant';
import { useDefaultForm } from '@/shared/hooks/useDefaultForm.hook';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Stack } from '@mui/material';
import { SubmitHandler } from 'react-hook-form';
import { HOME_SAMPLE_FORM } from '../constants/homeSampleForm.constant';
import { HOME_SAMPLE_FORM_DEFAULT } from '../constants/homeSampleFormDefault.constant';

/** Home画面用のサンプルフォームコンポーネント */
const HomeSampleForm = () => {
  const method = useDefaultForm<HomeSampleFormInput, HomeSampleFormOutput>({
    resolver: zodResolver(homeSampleFormSchema),
    defaultValues: HOME_SAMPLE_FORM_DEFAULT,
  });

  const { control } = method;

  const onSubmit: SubmitHandler<HomeSampleFormOutput> = (data) => {
    console.log(data);
    return data;
  };

  return (
    <DefaultForm method={method} onSubmit={onSubmit}>
      <Stack gap={2} px={2}>
        {/* 名前 */}
        <ControlledTextField
          control={control}
          name="name"
          label={HOME_SAMPLE_FORM.NAME.LABEL}
          helperText={HOME_SAMPLE_FORM.NAME.HELPER_TEXT}
          placeholder={HOME_SAMPLE_FORM.NAME.PLACEHOLDER}
          required
        />

        {/* メールアドレス */}
        <ControlledTextField
          control={control}
          name="email"
          label={HOME_SAMPLE_FORM.E_MAIL.LABEL}
          helperText={HOME_SAMPLE_FORM.E_MAIL.HELPER_TEXT}
          placeholder={HOME_SAMPLE_FORM.E_MAIL.PLACEHOLDER}
          required
        />

        {/* 年齢 */}
        <ControlledNumberTextField
          control={control}
          name="age"
          label={HOME_SAMPLE_FORM.AGE.LABEL}
          helperText={HOME_SAMPLE_FORM.AGE.HELPER_TEXT}
          placeholder={HOME_SAMPLE_FORM.AGE.PLACEHOLDER}
          required
        />

        {/* 備考 */}
        <ControlledTextField
          control={control}
          name="remark"
          label={HOME_SAMPLE_FORM.REMARK.LABEL}
          helperText={HOME_SAMPLE_FORM.REMARK.HELPER_TEXT}
          placeholder={HOME_SAMPLE_FORM.REMARK.PLACEHOLDER}
        />
        <Stack alignItems={'end'}>
          <Button type="submit" variant="contained" sx={{ width: 'fit-content' }}>
            {LABELS.COMMON.SUBMIT_BUTTON}
          </Button>
        </Stack>
      </Stack>
    </DefaultForm>
  );
};
export default HomeSampleForm;
