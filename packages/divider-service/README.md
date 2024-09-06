# Divider Service

This micro-service divides one number by another.

## Building

You can use the following commands in the **repository root directory** to build this service.

* To build the service on your host:

```
npm run -w divider-service build
```

* To build the Docker container:

```
docker build -t divider-service:latest -f dockerfiles/divider-service.dockerfile .
```

## Configuration

The service supports the following variables, either set in the `.env` file, or as environment variables:

* `DIVIDER_SERVICE_PORT` - The port the service listens on. Defaults to `3003`.

## Reference

### `POST /`

_Request parameters_

* `a` : `number` - The number to divide
* `b` : `number` - The number to divide by

_Response properties_

* `result` : `number` - The quotient of the two numbers
