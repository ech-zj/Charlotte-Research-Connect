from os import path

def mark_dups(file_path):
    relative_path = path.sep.join(file_path.split(path.sep)[:-1])
    filename = file_path.split(path.sep)[-1]
    new_filename = relative_path + 'dup_marked_' + filename
    result = set()
    with open(new_filename, 'w+') as new_file:
        with open(file_path) as f:
            for line in f.readlines():
                check = line.replace('"[]}\s\t','').lower()
                if check in result:
                    new_file.write('-' + line)
                elif not check:
                    new_file.write(line)
                else:
                    result.add(check)
                    new_file.write(line)

def main():
    mark_dups(path.join('Webscraping','sample.json'))

if __name__ == '__main__':
    main()