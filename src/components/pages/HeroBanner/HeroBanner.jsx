import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://i.pinimg.com/736x/06/0d/65/060d658303550c903bd36baac2f882cf.jpg',
  },
  {
    label: 'Bird',
    imgPath:
    'https://i.pinimg.com/736x/06/0d/65/060d658303550c903bd36baac2f882cf.jpg',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
    'https://i.pinimg.com/736x/06/0d/65/060d658303550c903bd36baac2f882cf.jpg',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
    'https://i.pinimg.com/736x/06/0d/65/060d658303550c903bd36baac2f882cf.jpg',
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: "20px" }}>
      <Box sx={{ maxWidth: 960, flexGrow: 1, }}>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    padding:"15px",
                    height: 480,
                    display: 'block',
                    maxWidth: 928,
                    borderRadius: "27px",
                    overflow: 'hidden',
                    width: '100%',
                    objectFit: "center",
                    boxSizing: "border"
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        {/* <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        /> */}
      </Box>
    </Box>
  );
}

export default SwipeableTextMobileStepper;
