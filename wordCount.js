function DocumentParser(reader) {
    this.reader = reader;
    this.reset();
}

DocumentParser.prototype.reset = function () {
    this.wordCount = 0;
    this.charCount = 0;
    this.lineCount = 0;
};


DocumentParser.prototype.parse = function () {
    var charOrWhiteSpaceOrNewLine = '';
    do {
        charOrWhiteSpaceOrNewLine = this.reader.getChunk();

        if (charOrWhiteSpaceOrNewLine.length > 1) {
            console.log(charOrWhiteSpaceOrNewLine);

            this.wordCount = charOrWhiteSpaceOrNewLine
                .split(' ')
                .length;

            if (this.charCount === 0)
                this.charCount++;

            this.charCount += charOrWhiteSpaceOrNewLine.replace(' ', '')
                .length;

        } else {

            if (this.lineCount === 0) //becouse first line doesn't count
                this.lineCount++;

            if (charOrWhiteSpaceOrNewLine !== '' && charOrWhiteSpaceOrNewLine !== ' ') {
                this.charCount++;
            }
            if (charOrWhiteSpaceOrNewLine === ' ') {
                this.wordCount++;
            }
            if (charOrWhiteSpaceOrNewLine === '/n')
                this.lineCount++;
        }
    } while (charOrWhiteSpaceOrNewLine !== '');

};