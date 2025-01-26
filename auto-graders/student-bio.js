// Each testSuite represents a single run of the student and solution code.
testSuite({
    // `inputs` is the data to pass to user input functions (like readInt)
    inputs: ['Steve', 11, 'Sza', 'ramen'],
    // ignoreErrors lets you allow code to pass, even if it doesnt successfully run
    ignoreErrors: false,
    // `beforeRun` is a function that gets called prior to running the student
    // and solution code. When called, the function gets called with a single
    // argument `code`. Any changes to the code object will be remain when the
    // code is eventually run.
    beforeRun: function(code) {
        // code => {
        //     student: 'The student's code',
        //     solution: 'The solution code',
        // }
        // In beforeRun, you can test things about the student's code.
        // For example:
        // expect(code.student).toContain('if');
        //expect(code.student).toContain('let day =');
    },
    // `afterRun` is a function that gets called after running the student and
    // solution code. When called, the function gets called with a single
    // argument `output`, which is the result of running the code.
    afterRun: function(output) {
        // output => {
        //     student: {
        //         graphics: [GraphicsElement],
        //         console: [String],
        //         runnerData: [Object]
        //     },
        //     solution: {
        //         graphics: [GraphicsElement],
        //         console: [String],
        //         runnerData: [Object]
        //     },
        // }
        // In afterRun, you can test things about the student's output.
        // For example:
        // expect(output.student.graphics).toEqual(output.solution.graphics);
        // expect(output.student.console).toContain("name:");
        // expect(output.student.console).toHaveLength(4);

        const safeCheckConsoleIndexValueContains = (index, expectedValue, testName) => {
            debugger;
            if (output.student.console.length >= index + 1){
                expect(output.student.console[index]).toContain(expectedValue).withOptions({
                    testName: testName,
                    studentOutput: output.student.console[index] || 'None',
                });
            } else {
                expect('').toEqual('line ' + (index + 1) + ' in console to equal: ' + expectedValue);
            }
        };

        const safeCheckConsoleIndexValueEquals = (index, expectedValue) => {
            if (output.student.console.length >= index + 1){
                expect(output.student.console[index]).toEqual(expectedValue);
            } else {
                expect('').toEqual('line ' + (index + 1) + ' in console to equal: ' + expectedValue);
            }
        };

        safeCheckConsoleIndexValueContains(0, 'is in grade', 'Your code should output: *name* is in grade *grade*.');
        safeCheckConsoleIndexValueContains(1, 'listens to', 'Your code should output: *name* listens to *artist*.');
        safeCheckConsoleIndexValueContains(2, 'likes to eat', 'Your code should output: *name* likes to eat *food*.');



    }
});
