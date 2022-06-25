const nameClass = require('./util/nameClass.js');

module.exports = theme => {
    const generators = [
        ([modifier, size]) => {
            const defaults = {
                ['html[dir="ltr"] ' + nameClass('end', modifier)]: {
                    right: size,
                },
                ['html[dir="ltr"] ' + nameClass('start', modifier)]: {
                    left: size,
                },
                ['html[dir="rtl"] ' + nameClass('start', modifier)]: {
                    right: size,
                },
                ['html[dir="rtl"] ' + nameClass('end', modifier)]: {
                    left: size,
                },
            };

            const negatives =
                modifier === 'auto' || modifier === '0'
                    ? {}
                    : {
                          ['html[dir="ltr"] ' + nameClass('\-end', modifier)]: {
                              right: `-${size}`,
                          },
                          ['html[dir="ltr"] ' + nameClass('\-start', modifier)]:
                              {
                                  left: `-${size}`,
                              },
                          ['html[dir="rtl"] ' + nameClass('\-start', modifier)]:
                              {
                                  right: `-${size}`,
                              },
                          ['html[dir="rtl"] ' + nameClass('\-end', modifier)]: {
                              left: `-${size}`,
                          },
                      };

            return { ...defaults, ...negatives };
        },
    ];
    return generators.flatMap(generator =>
        Object.entries(theme('inset')).flatMap(generator)
    );
};
