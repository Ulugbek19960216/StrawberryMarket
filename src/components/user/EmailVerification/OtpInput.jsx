import React from 'react'


function OtpInput({value, onChange, onKeyUp, reference}) {
  return (
    <input
    type="text"
    maxLength={1}
      style={{
        textAlign: 'center',
        fontSize: '23px',
        width: '48px',
        height: '56px',
        borderRadius: '12px',
        marginLeft: '16px',
        backgroundColor: '#F0F2F5',
        padding: '8px, 8px',
        border: '2px solid #DBE0E5',
      }}
      value={value}
      onChange={onChange}
      onKeyUp={onKeyUp}
      ref={reference}
    />
  )
}

export default OtpInput