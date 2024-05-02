**Dropdown Component README**

This project consists of a simple dropdown component implemented using React. The dropdown component allows users to select an option from a list of provided items.

### Getting Started

To use this dropdown component in your project, follow these steps:

1. Clone the repository to your local machine:

   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```
   cd <project-directory>
   ```

3. Install dependencies:

   ```
   npm install
   ```

4. Start the development server:

   ```
   npm start
   ```

### Usage

To use the dropdown component in your React application, import the `Dropdown` component and pass an array of items as props. The selected item will be displayed in the dropdown button, and users can select an option from the dropdown list.

Example usage:

```jsx
import React from 'react';
import Dropdown from './Component/Dropdown';

function App() {
  const items = ['Option 1', 'Option 2', 'Option 3'];

  return (
    <div className="app">
      <h1>Dropdown Example</h1>
      <Dropdown items={items} />
    </div>
  );
}

export default App;
```

### Component Features

- On hovering over the button, the dropdown list is displayed.
- Clicking on an option in the dropdown list closes the dropdown.
- The dropdown component receives an array of items to display in the list.

### Styling

The styling of the dropdown component can be customized using CSS. The provided `Dropdown.css` file can be modified to change the appearance of the dropdown button and list.

### Video Explanation

A video explaining the approach to solving the problem and demonstrating the final product has been recorded. You can watch the video [here](<video-link>).

### Hosted

The site Is hoste [here](<https://6633b7490b026a0b8840a7d9--silver-sopapillas-45a58e.netlify.app/>)

### Author

This dropdown component was created by [Your Name]. If you have any questions or feedback, feel free to contact me at [your-email@example.com](ananthuak97@gmail.com).