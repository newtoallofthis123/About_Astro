import os
import frontmatter

def get_file_slugs(directory):
    slugs = []

    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.mdx'):
                slug = os.path.relpath(os.path.join(root, file), directory)
                slugs.append(slug)

    return slugs


def get_files():
    current_dir = os.path.dirname(os.path.abspath(__file__))
    BASE_DIR = os.path.normpath(os.path.join(current_dir, '..', '..'))
    directory = os.path.join(BASE_DIR, 'src', 'pages', 'blog')
    file_slugs = get_file_slugs(directory)
    return file_slugs

def get_file_content(path):
    current_dir = os.path.dirname(os.path.abspath(__file__))
    BASE_DIR = os.path.normpath(os.path.join(current_dir, '..', '..'))
    directory = os.path.join(BASE_DIR, 'src', 'pages', 'blog')
    path = path.replace('/', os.sep)
    file_path = os.path.join(directory, path)
    with open(file_path, 'r') as f:
        content = f.read()
    return content

def get_file_attributes(path):
    post = frontmatter.Frontmatter.read(get_file_content(path))
    return post