package main

import (
	"fmt"
	"os"
	"os/exec"
	"runtime"
)

func getEnv(key string) string {
	env := os.Getenv(key)
	if env == "" {
		fmt.Printf("Env variable not set correctly: %s\n", key)
	}
	return env
}

// Credit to rimiti for this function.
// https://github.com/rimiti/kill-port
func killPort(port string) {
	var err error
	if runtime.GOOS == "windows" {
		command := fmt.Sprintf("((netstat -ano | findstr %s) -split '\\s+')[-1]", port)
		pid, err := exec.Command("powershell", command).Output()
		if err != nil {
			fmt.Printf("Error during command: %s\n", command)
			return
		}
		if len(pid) == 0 {
			fmt.Printf("Port %s not in use\n", port)
			return
		}
		command = fmt.Sprintf("TaskKill /f /pid %s", pid)
		err = exec.Command("powershell", command).Run()
		if err != nil {
			fmt.Printf("Error during command: %s\n", command)
			return
		}
	} else {
		command := fmt.Sprintf("sudo lsof -i tcp:%s | grep LISTEN | awk '{print $2}' | sudo xargs kill -9", port)
		err = exec.Command("bash", "-c", command).Run()
		if err != nil {
			fmt.Printf("Error during command: %s\n", command)
		}
	}

	if err != nil {
		fmt.Printf("Error while killing port: %v\n", err)
	} else {
		fmt.Printf("Port %s successfully killed\n", port)
	}
}
