# Contact Form React App

This React application is a simple contact form that allows users to submit their contact information and messages. The form data is sent to a Google Apps Script deployed as a web app to handle form submissions.

## Features

- User-friendly contact form with fields for name, phone, email, and message.
- Responsive design for optimal user experience on various screen sizes.
- Real-time feedback for successful or unsuccessful form submissions.
- Clear form functionality with a confirmation prompt.

## Getting Started

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/Apuri-Amarnath/Contact-page-with-gSheets.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the contact form app.

## Usage

1. Fill out the contact form with your information.
2. Click the "Submit" button to send the form data.
3. Receive real-time feedback on the success or failure of the form submission.
4. Optionally, clear the form by confirming the prompt.

## Technologies Used

- React.js: JavaScript library for building user interfaces.
- Google Apps Script: Used to handle form submissions and store data.

## Project Structure

- `App.js`: Main component containing the contact form and form submission logic.
- `App.css`: Styles for the application, including responsive design.
- `public/`: Directory containing static assets such as images.
- `README.md`: Project documentation.

## Styling

The application features a clean and responsive design. Media queries are used to adjust the layout for different screen sizes, providing an optimal viewing experience.

## Deployment

The form data is submitted to a Google Apps Script deployed as a web app. Ensure that the deployment URL in the `fetch` function within `App.js` points to your own deployment.

```javascript
fetch("https://script.google.com/macros/s/AKfycbxQxa7q05XGTGhla_Pts8cA8d3FS0Cmj-RLtO6ZQuUAaxKMkJVyoruZuVd0JZaA3bztHg/exec", {
  method: "POST",
  body: new URLSearchParams(formRespE),
})
// ...
```
## Here is the googlesheets url:
- https://docs.google.com/spreadsheets/d/1F9dC31Awn4CJeUW98LcHHxQaBZwLrZOMzE0jdy0pKaM/edit?usp=sharing

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
