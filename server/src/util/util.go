package util

import (
	"encoding/json"
	"io"

	"github.com/pkg/errors"
)

func Unmarshal(r io.Reader, v any) error {
	body, err := io.ReadAll(r)
	if err != nil {
		return errors.Wrap(err, "unmarshal")
	}

	err = json.Unmarshal(body, v)
	if err != nil {
		return errors.Wrap(err, "unmarshal")
	}

	return nil
}
