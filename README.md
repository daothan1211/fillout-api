  <h3 align="center">FILLOUT API</h3>

  <p align="center">
    Fillout API to get submissions!
    <br />
    <a href="https://fillout.notion.site/Software-engineering-screen-fbd58fd78f59495c99866b91b1358221"><strong>Software engineering screen »</strong></a>
    <br />
    <br />
  </p>
</div>

<!-- ABOUT THE PROJECT -->

## About The Project

[https://fillout-api.onrender.com](https://fillout-api.onrender.com)

Request this API to get the submissions from Fillout

Query parameters:

- limit(optional) - the maximum number of responses to retrieve per request. Must be a number between 1 and 150. Default is 150.
- afterDate (optional) - a date string to filter responses submitted after this date
- beforeDate (optional) - a date string to filter responses submitted before this date
- offset(optional) - the starting position from which to fetch the responses. Default is 0.
- status(optional) - pass in_progress to get a list of in-progress (unfinished) submissions. By default, only finished submissions are returned.
- includeEditLink (optional) - pass true to include a link to edit the submission as editLink
- sort (optional) - can be asc or desc, defaults to asc

### Built With

This section should list any major frameworks/libraries used to bootstrap your project.

- [NodeJS][Next-url](https://nodejs.org/en)]
- [ExpressJS][React-url](https://expressjs.com)]

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/daothan1211/fillout-api
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Enter your API in `.env`
   ```env
   API_URL="ENTER YOUR API_URL"
   API_TOKEN="ENTER YOUR API_TOKEN"
   ```

## Usage

You can request to get submissions from Fillout following the query with defined query params above

https://fillout-api.onrender.com/${formID}/filteredResponses?limit=1
