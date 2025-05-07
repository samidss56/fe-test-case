### gmt

#### Main Tasks

1. Add the functionality to reset the form if the todo is created successfully
   in `TodoCreate` component

2. Fix the callback error for `onTodoMove` in `TodoList` component

3. Add the validation for the title and the description in `todoSchema`

- Title: required, min 3 characters, max 20 characters
- Description: required, min 3 characters, max 100 characters

4. Add the any loading ui if the todo's mutation is running, e.g. `create`
   `move` or `delete`,

##### Additional Tasks (Optional)

- Improve your styling to this project
