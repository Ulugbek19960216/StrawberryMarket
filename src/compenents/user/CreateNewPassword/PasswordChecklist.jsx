import { Box } from '@mui/material';
import React from 'react';
import PasswordChecklist from 'react-password-checklist';

function PasswordChecklistFunc({formPasswordConfirm, formPassword}) {
  return (
    <Box>
        <PasswordChecklist
            rules={[
                'minLength',
                'specialChar',
                'number',
                'capital',
                'match',
                ]}
                minLength={8}
                value={formPassword}
                valueAgain={formPasswordConfirm}
                onChange={(isValid) => {}}
                />
    </Box>
  )
}

export default PasswordChecklistFunc;