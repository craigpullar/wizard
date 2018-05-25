import React from 'react';

const Wizard = () => (
    <div className="wizard">
        <div className="wizard__flag-bg" />
        <h1 className="wizard__title">!W1Z4RD!</h1>
        <img
            src="/images/common/wizard.png"
            alt="wizard"
            className="wizard__wizard-img"
        />
        <img
            src="/images/common/wizard_hand.png"
            alt="wizard"
            className="wizard__hand wizard__hand--left"
        />
        <img
            src="/images/common/wizard_hand.png"
            alt="wizard"
            className="wizard__hand wizard__hand--right"
        />

    </div>
);

export default Wizard;
