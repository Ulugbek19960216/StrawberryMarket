import React from 'react';
import { Button} from '@mui/material';
import InputField from './InputFields';
import PasswordChecklist from 'react-password-checklist';

function FormComponent({ formData, handleChange, handleSubmit, isHide }) {
    return (
        <form onSubmit={handleSubmit}>
            <InputField
                label="Email"
                name="email"
                placeholder="you@example.com"
                type="email"
                value={formData.email}
                onChange={handleChange}
            />
            <InputField
                label="Password"
                name="password"
                placeholder="************"
                type="password"
                value={formData.password}
                onChange={handleChange}
            />
            <InputField
                label="Confirm Password"
                name="confirmPassword"
                placeholder="************"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
            />
            {isHide && (
                <PasswordChecklist
                    rules={[
                        'minLength',
                        'specialChar',
                        'number',
                        'capital',
                        'match',
                    ]}
                    minLength={8}
                    value={formData.password}
                    valueAgain={formData.confirmPassword}
                    onChange={(isValid) => {}}
                />
            )}
            <Button
                variant="contained"
                type="submit"
                sx={{
                    width: '502px',
                    marginBottom: '25px',
                    textTransform: 'none',
                    height: '40px',
                    '&:hover': { backgroundColor: '#F20D33' },
                    borderRadius: '12px',
                    backgroundColor: '#F20D33',
                }}
            >
                Sign Up
            </Button>
        </form>
    );
}

export default FormComponent;
