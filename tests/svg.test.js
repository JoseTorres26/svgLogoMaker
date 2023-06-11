const { prompt } = require('inquirer');
const fs = require('fs');

jest.mock('inquirer');

describe('svg logo create', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should create an SVG file with the provided input', async () => {
    const mockPrompt = jest.fn().mockResolvedValue({
      txt: 'ABC',
      color: 'red',
      shape: 'Square',
      svgColor: 'blue',
    });

    prompt.mockImplementationOnce(mockPrompt);

    const writeFileSyncSpy = jest.spyOn(fs, 'writeFileSync');

    await require('../index');

    expect(mockPrompt).toHaveBeenCalledWith([
      {
        type: 'input',
        name: 'txt',
        message: 'enter three characters',
        validate: expect.any(Function),
      },
      {
        type: 'input',
        name: 'color',
        message: 'what color do you want the text?',
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Select a shape',
        choices: ['Square', 'Circle', 'Triangle'],
      },
      {
        type: 'input',
        name: 'svgColor',
        message: 'what color do you want the svg?',
      },
    ]);

  
    expect(writeFileSyncSpy).toHaveBeenCalledWith(
      'shape.svg',
      expect.any(String),
      'utf-8',
      expect.any(Function)
    );

    writeFileSyncSpy.mockRestore();
  });
});