const utilities = () => ({
    'html[dir="ltr"] .bg-gradient-to-e': {
        'background-image':
            'linear-gradient(to left, var(--tw-gradient-stops))',
    },
    'html[dir="ltr"] .bg-gradient-to-s': {
        'background-image':
            'linear-gradient(to right, var(--tw-gradient-stops))',
    },
    'html[dir="rtl"] .bg-gradient-to-e': {
        'background-image':
            'linear-gradient(to right, var(--tw-gradient-stops))',
    },
    'html[dir="rtl"] .bg-gradient-to-s': {
        'background-image':
            'linear-gradient(to left, var(--tw-gradient-stops))',
    },
});

module.exports = utilities;
