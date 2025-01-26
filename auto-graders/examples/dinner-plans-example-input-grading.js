testSuite({
    // `inputs` is the data to pass to user input functions (like readInt)
    inputs: ['Karel', 4],
    // `beforeRun` is a function that gets called prior to running the student
    // and solution code. When called, the function gets called with a single
    // argument `code`. Any changes to the code object will be remain when the
    // code is eventually run.
    beforeRun: function(code) {
        expect(code.student).toContain('readLine').withOptions({
            testName: 'Your code should prompt the user for their name.'
        });
    },
    // `afterRun` is a function that gets called after running the student and
    // solution code. When called, the function gets called with a single
    // argument `output`, which is the result of running the code.
    afterRun: function(output) {
        expect(output.student.console.join('\n')).toContain('Karel').withOptions({
            testName: 'Your code should output the user\'s name.',
            studentOutput: output.student.console.join('\n') || 'None',
        });
        expect(output.student.console.join('\n')).toContain(' 4').withOptions({
            testName: 'If the user inputs 4, your code should output that you will meet them at 4.',
            studentOutput: output.student.console.join('\n') || 'None',
        });
    }
});

testSuite({
    // `inputs` is the data to pass to user input functions (like readInt)
    inputs: ['Tracy', 6],
    // `beforeRun` is a function that gets called prior to running the student
    // and solution code. When called, the function gets called with a single
    // argument `code`. Any changes to the code object will be remain when the
    // code is eventually run.
    beforeRun: function(code) {
    },
    // `afterRun` is a function that gets called after running the student and
    // solution code. When called, the function gets called with a single
    // argument `output`, which is the result of running the code.
    afterRun: function(output) {
        expect(output.student.console.join('\n')).toContain('Tracy').withOptions({
            testName: 'Your code should output the user\'s name.',
            studentOutput: output.student.console.join('\n') || 'None',
        });
        expect(output.student.console.join('\n')).toContain(' 6').withOptions({
            testName: 'If the user inputs 6, your code should output that you will meet them at 6.',
            studentOutput: output.student.console.join('\n') || 'None',
        });
    }
});