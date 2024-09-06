# Multiplier Service

This micro-service multiplies two numbers together.

## Building

You can use the following commands in the **repository root directory** to build this service.

* To build the service on your host:

```
npm run -w multiplier-service build
```

* To build the Docker container:

```
docker build -t multiplier-service:latest -f dockerfiles/multiplier-service.dockerfile .
```

## Configuration

The service supports the following variables, either set in the `.env` file, or as environment variables:

* `MULTIPLIER_SERVICE_PORT` - The port the service listens on. Defaults to `3002`.

## Reference

### `POST /`

_Request parameters_

* `a` : `number` - The first number
* `b` : `number` - The second number

_Response properties_

* `result` : `number` - The product of the two numbers
