// Each testSuite represents a single run of the student and solution code.
// that means you can call testSuite as many times as you need!  See this example
testSuite({
    inputs: [false, true],
    ignoreErrors: false,
    beforeRun: function (code) {
    },
    afterRun: function (output) {
        const safeCheckConsoleIndexValueContains = (index, expectedValue, testName) => {
            if (output.student.console.length >= index + 1) {
                expect(output.student.console[index]).toContain(expectedValue).withOptions({
                    testName: testName,
                    studentOutput: output.student.console[index] || 'None',
                });
            } else {
                expect('').toEqual('line ' + (index + 1) + ' in console to equal: ' + expectedValue);
            }
        };
        const safeCheckConsoleIndexValueEquals = (index, expectedValue, testName) => {
            if (output.student.console.length >= index + 1) {
                expect(output.student.console[index]).toEqual(expectedValue).withOptions({
                    testName: testName,
                    studentOutput: output.student.console[index] || 'None',
                });
            } else {
                expect('').toEqual('line ' + (index + 1) + ' in console to equal: ' + expectedValue);
            }
        };
        // debugger;
        safeCheckConsoleIndexValueContains(0, 'Thank you, come again', 'You can pay if you have a debit card');
    }
});
testSuite({
    inputs: [false, false],
    ignoreErrors: false,
    beforeRun: function (code) {
    },
    afterRun: function (output) {
        const safeCheckConsoleIndexValueContains = (index, expectedValue, testName) => {
            if (output.student.console.length >= index + 1) {
                expect(output.student.console[index]).toContain(expectedValue).withOptions({
                    testName: testName,
                    studentOutput: output.student.console[index] || 'None',
                });
            } else {
                expect('').toEqual('line ' + (index + 1) + ' in console to equal: ' + expectedValue);
            }
        };
        const safeCheckConsoleIndexValueEquals = (index, expectedValue, testName) => {
            if (output.student.console.length >= index + 1) {
                expect(output.student.console[index]).toEqual(expectedValue).withOptions({
                    testName: testName,
                    studentOutput: output.student.console[index] || 'None',
                });
            } else {
                expect('').toEqual('line ' + (index + 1) + ' in console to equal: ' + expectedValue);
            }
        };
        // debugger;
        safeCheckConsoleIndexValueContains(0, 'You can not pay', 'If the answer to both questions is no, you can\'t pay');
    }
});
