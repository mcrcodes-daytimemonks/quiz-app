const mapToIsCodeObjs = (string, delimiter) => {
    const startsWithDelimiter = string.startsWith(delimiter)
    const groups = string.split(delimiter).filter(group => group.length);
    return groups.map((group, i) => ({ isCode: Boolean(startsWithDelimiter ^ (i % 2)), string: group }))
}

export default mapToIsCodeObjs;