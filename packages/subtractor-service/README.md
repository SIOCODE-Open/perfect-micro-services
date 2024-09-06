# Subtractor Service

This micro-service subtracts one number from another.

## Building

You can use the following commands in the **repository root directory** to build this service.

* To build the service on your host:

```
npm run -w subtractor-service build
```

* To build the Docker container:

```
docker build -t subtractor-service:latest -f dockerfiles/subtractor-service.dockerfile .
```

## Configuration

The service supports the following variables, either set in the `.env` file, or as environment variables:

* `SUBTRACTOR_SERVICE_PORT` - The port the service listens on. Defaults to `3001`.

## Reference

### `POST /`

_Request parameters_

* `a` : `number` - The number to subtract from
* `b` : `number` - The number to subtract

_Response properties_

* `result` : `number` - The difference of the two numbers
