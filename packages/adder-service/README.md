# Adder Service

This micro-service adds two numbers together.

## Building

You can use the following commands in the **repository root directory** to build this service.

* To build the service on your host:

```
npm run -w adder-service build
```

* To build the Docker container:

```
docker build -t adder-service:latest -f dockerfiles/adder-service.dockerfile .
```

## Configuration

The service supports the following variables, either set in the `.env` file, or as environment variables:

* `ADDER_SERVICE_PORT` - The port the service listens on. Defaults to `3000`.

## Reference

### `POST /`

_Request parameters_

* `a` : `number` - The first number
* `b` : `number` - The second number

_Response properties_

* `result` : `number` - The sum of the two numbers
