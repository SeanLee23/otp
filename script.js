function moveToNext(currentInput, nextInputId) {
    if (currentInput.value.length === 1) {
      document.getElementById(nextInputId).focus();
    }
  }
  
  function verifyOTP() {
    const otpDigits = [];
    const errorMessage = document.getElementById('errorMessage');
    
    // Retrieve OTP digits from input fields
    for (let i = 1; i <= 5; i++) {
      const digit = document.getElementById('digit' + i).value;
      if (digit.length !== 1 || isNaN(digit)) {
        errorMessage.textContent = 'Please enter valid OTP digits.';
        return;
      }
      otpDigits.push(digit);
    }
    
    // Convert OTP digits to string
    const otp = otpDigits.join('');
    
    // Simulate OTP verification (replace with actual verification logic)
    if (otp === '12345') {
      errorMessage.textContent = 'OTP verified successfully!';
      errorMessage.style.color = 'green';
    } else {
      errorMessage.textContent = 'Incorrect OTP. Please try again.';
      errorMessage.style.color = 'red';
    }
  }
  