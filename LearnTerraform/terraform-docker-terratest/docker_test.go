package test

import (
	"testing"

	"github.com/gruntwork-io/terratest/modules/docker"
	"github.com/gruntwork-io/terratest/modules/random"
	"github.com/stretchr/testify/assert"
)

func TestDockerUbuntu(t *testing.T) {
	tag := "nginx:latest"
	containerName := "terratest-" + random.UniqueId()

	docker.Run(t, tag, &docker.Options{
		Name: containerName,
	})

	out := docker.Run(t, tag, &docker.Options{
		Command: []string{"echo", "Hello, World"},
	})

	assert.Contains(t, out, "Hello, World")
}
