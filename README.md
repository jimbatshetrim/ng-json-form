# Angular Reactive Form from External JSON File

This is an Angular 15 application that demonstrates how to build a reactive form from an external JSON file.

### External JSON File
The external JSON file used in this project is located in the `src/assets` folder. The file contains the form definition in JSON format.

The form definition includes the following properties:

- `name`: The name of the form.
- `value`: The value of the form.
- `validators`: Set of validators to add.

### Building the Form
The form is built dynamically from the external JSON file using the `FormService`. The httpClient gets the json file from assets folder and creates the form according to the configs. 