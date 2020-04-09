const Step = require('../models/registrationStep');

module.exports = async () => {
  const step = [
    {
      title: 'final step',
      details:
        'Coding has exploded in recent years, changing from something used in computer games and the occasional electronic device, to something which shapes the way that we live in the modern world. Pretty much every device, electronic item, and modern piece of machinery contains at least a little bit of code. As the number of use cases for coding grows, the number of coding jobs available will also continue to grow. This means that now is an excellent time for learning how to code for beginners',
    },
    {
      title: 'second step',
      details:
        'Coding has exploded in recent years, changing from something used in computer games and the occasional electronic device, to something which shapes the way that we live in the modern world. Pretty much every device, electronic item, and modern piece of machinery contains at least a little bit of code. As the number of use cases for coding grows, the number of coding jobs available will also continue to grow. This means that now is an excellent time for learning how to code for beginners',
    },
    {
      title: 'information step',
      details:
        'Coding has exploded in recent years, changing from something used in computer games and the occasional electronic device, to something which shapes the way that we live in the modern world. Pretty much every device, electronic item, and modern piece of machinery contains at least a little bit of code. As the number of use cases for coding grows, the number of coding jobs available will also continue to grow. This means that now is an excellent time for learning how to code for beginners',
    },
    {
      title: 'new step to complete',
      details:
        'Coding has exploded in recent years, changing from something used in computer games and the occasional electronic device, to something which shapes the way that we live in the modern world. Pretty much every device, electronic item, and modern piece of machinery contains at least a little bit of code. As the number of use cases for coding grows, the number of coding jobs available will also continue to grow. This means that now is an excellent time for learning how to code for beginners',
    },
  ];
  await Step.create(step);
};