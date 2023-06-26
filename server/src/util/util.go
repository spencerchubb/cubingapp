package util

import (
	"encoding/json"
	"io"
)

func Unmarshal(r io.Reader, v any) error {
	body, err := io.ReadAll(r)
	if err != nil {
		return err
	}

	return json.Unmarshal(body, v)
}
