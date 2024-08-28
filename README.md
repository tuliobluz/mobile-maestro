# What is [Maestro](https://maestro.mobile.dev/)?

Maestro is the simplest and most effective mobile UI testing framework.

All the documentation will be explained to run in Windows, as my personal computer.

## Set up

[Instaling Maestro](https://maestro.mobile.dev/getting-started/installing-maestro)
- [MacOS](https://maestro.mobile.dev/getting-started/installing-maestro/macos)
- [Windows](https://maestro.mobile.dev/getting-started/installing-maestro/windows)
- [Linux](https://maestro.mobile.dev/getting-started/installing-maestro/linux)

## Folder Structure

The folder structure of the project:

* `.github`: maestro root folder
* `.maestro`: contains the page objects to be used on the spec tests
    * `scripts`: contains helper functions.
    * `settings`: contains the specifications for the settings feature.
        * `subflows`: It's common to have some Flow files that are only meant to be executed as part of another Flow via the runFlow command. 
        * `familyInvite.yml`: Specification to test family invitations
* `config.yml`: is used to define the configuration settings for running mobile UI tests. 

## Config file

- timeout: 8 seconds
- retries: 2 times when it fails

# How to Run

## General requirements

Export the environmental variables `MAESTRO_EMAIL` and `MAESTRO_PASSWORD` to login into the app

1. Open the `env.sh` file and update the credentials with the registered user

    ```
    export MAESTRO_EMAIL= 
    export MAESTRO_PASSWORD=
    ```
2. Run `source env.sh` to export the `MAESTRO_EMAIL` and `MAESTRO_PASSWORD`

## General Running

- `maestro test familyInvite.yml` Run specific file(familyInvite.yml)

- `maestro test .maestro` runs all tests

## Running with windows

- `maestro --host YOUR_IPV4 --device emulator-5554 test .maestro/settings/familyInvite.yml` Run specific file(familyInvite.yml)

- `maestro --host YOUR_IPV4 --device emulator-5554 test .maestro` runs all tests

## Maestro Studio

Your personal assistant to help write your Maestro Flows. Use Maestro Studio to instantly discover the exact commands needed to interact with your app.

### General

- `maestro studio` 

### Windows

- `maestro --host YOUR_IPV4 --device emulator-5554 studio` Launch the [maestro studio](https://maestro.mobile.dev/getting-started/maestro-studio) against the emulator device



### Troubleshooting

- I noticed as long you keep the emulator running will get slower and slower, restart the emulator, and will get better.
- Sometimes Maestro on WSL will find that the emulator is offline restarting the server and the emulator helps to fix it.
    - `adb kill-server`
- If your Android emulator is not up and running in the Windows host, the Maestro test command fails to find the installed emulator. At this point, it is recommended that you fire up your emulator before running the flow using Maestro.