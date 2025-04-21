# Node.js Web API for Random Image Retrieval

This project is a simple web API built with Node.js and Express that randomly retrieves an image from a specified folder.

## Project Structure

```
node-web-api
├── src
│   ├── app.js               # Entry point of the application
│   ├── routes
│   │   └── images.js        # Route for retrieving random images
│   └── images               # Folder to store image files
├── package.json             # npm configuration file
└── README.md                # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node package manager)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd node-web-api
   ```

3. Install the dependencies:
   ```
   npm install
   ```

### Running the Application

To start the server, run the following command:
```
node src/app.js
```

The server will start on `http://localhost:3000`.

### API Endpoint

- `GET /images/random`: This endpoint returns a random image from the `src/images` folder.

### Adding Images

Place your image files in the `src/images` directory to make them available for retrieval.

### License

This project is licensed under the MIT License.