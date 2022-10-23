# syntax=docker/dockerfile:1

FROM golang:1.19

WORKDIR app

EXPOSE 3000

COPY go.mod go.mod
COPY go.sum go.sum
RUN go mod download

COPY *.go ./

COPY --chmod=777 entry.sh entry.sh
ENTRYPOINT ["./entry.sh"]