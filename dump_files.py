import os
import argparse

# Folders to skip
EXCLUDED_DIRS = {'node_modules', 'drizzle', 'dist'}

# Files to skip (starts with or exact match)
EXCLUDED_FILES_PREFIXES = {'env.'}
EXCLUDED_FILES_EXACT = {'.env'}

def should_exclude_file(filename):
    return (
        filename in EXCLUDED_FILES_EXACT or
        any(filename.startswith(prefix) for prefix in EXCLUDED_FILES_PREFIXES)
    )

def append_files_to_text(root_folder, output_file):
    with open(output_file, 'a', encoding='utf-8') as outfile:  # Append mode
        for subdir, dirs, files in os.walk(root_folder):
            # Modify dirs in-place to skip excluded directories
            dirs[:] = [d for d in dirs if d not in EXCLUDED_DIRS]

            for file in files:
                if should_exclude_file(file):
                    continue

                file_path = os.path.join(subdir, file)
                try:
                    with open(file_path, 'r', encoding='utf-8') as infile:
                        content = infile.read()
                        outfile.write(f"//{file}\n")
                        outfile.write(content + "\n\n")
                except Exception as e:
                    print(f"Could not read file: {file_path}. Error: {e}")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Append all file contents from subfolders to a single text file, excluding specified files and folders.")
    parser.add_argument("input_folder", help="Path to the root folder containing files")
    parser.add_argument("output_file", help="Path to the output text file")

    args = parser.parse_args()

    if not os.path.isdir(args.input_folder):
        print("Error: The input path is not a valid directory.")
    else:
        append_files_to_text(args.input_folder, args.output_file)
        print(f"All file contents appended to {args.output_file}")
