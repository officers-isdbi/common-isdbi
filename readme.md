# Common ISDBI

This repository serves as a shared common folder for all hackathon-related projects. It is designed to be included as a submodule in other repositories, providing reusable resources and utilities.

## Features

-   Shared utilities and scripts
-   Common configuration files
-   Documentation and templates

## Usage

### Adding as a Submodule

To include this repository as a submodule in your project, run the following command:

```bash
git submodule add <repository-url> common
```

### Updating the Submodule

To pull the latest changes from the common folder, use:

```bash
git submodule update --remote
```

### Removing the Submodule

If you need to remove the submodule, follow these steps:

1. Remove the submodule entry from `.gitmodules`.
2. Delete the submodule folder:
    ```bash
    rm -rf common-isdbi
    ```
3. Remove the submodule entry from `.git/config`.

## Contributing

Contributions are welcome! Please follow the guidelines below:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Submit a pull request with a detailed description.

## License

This repository is licensed under [MIT License](LICENSE).

## Contact

For any questions or issues, please reach out to the hackathon team.
