---
title: Installation Guide
description: A guide on installing the required libraries on particular platforms
---
## Note for Ubuntu Linux Users
Based on personal experience, some additional libraries may be required:

```sh
sudo apt install libwebkit2gtk-4.1-dev
sudo apt install libjavascriptcoregtk-4.1-dev
sudo apt install libsoup-3.0-dev
sudo apt install clang
```

##  Note for Windows Users

You need to first install GNU make and other utilities before running the `make` scripts:

1. Install Chocolatey from https://chocolatey.org/install

2. In an administrative shell, run `choco install make`

3. Then, run `choco install gnuwin32-coreutils.install` in an administrative shell,
   which will install several GNU utilities such as `mv` command.

4. You also need to add `C:\Program Files (x86)\GnuWin32\bin` to your PATH environment variable
   to make sure that the make scripts can make use of these commands.


<!-- ## Nix usage (not ready to be used!)

Before starting the project, ensure you have [NIX](https://nixos.org/download/) installed and enable
the [flakes](https://nixos.wiki/wiki/Flakes) experimental feature.

To do this, add the following line to your Nix configuration file:

- For user-specific settings, edit `~/.config/nix/nix.conf`:

- For system-wide settings, edit `/etc/nix/nix.conf`:

```
experimental-features = nix-command flakes
```

### Installing Dependencies

To install the necessary dependencies for the project, run the following command:

```bash
nix develop
```

This command will set up a development environment with all the required tools and libraries specified in the
`flake.nix` file.

**Note**: You will need to run `nix develop` in every new terminal session before starting development to make the tools
available in that shell. This is because the environment is only active within the current shell session and does not
persist across multiple terminal sessions. -->