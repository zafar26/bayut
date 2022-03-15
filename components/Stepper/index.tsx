import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const MyStepper = ({ steps, activeStep }: any) => {
    return (
        <div>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label: any) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </div>
    );
};
export default MyStepper;
