// Each testSuite represents a single run of the student and solution code.
testSuite({
    // `inputs` is the data to pass to user input functions (like readInt)
    inputs: [],
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
        // expect(code.student).toContain('else');
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
        expect(output.student.console.length).toEqual(6);
        expect(output.student.console[0]).toContain('wears glasses');
        expect(output.student.console[1]).toContain('is an engineer');
        expect(output.student.console[2]).toContain('plays basketball');
        expect(output.student.console[3]).toContain('wears contacts');
        expect(output.student.console[4]).toContain('is a teacher');
        expect(output.student.console[5]).toContain('plays the drums');

    }
});
