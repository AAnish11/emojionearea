define([
    'jquery',
    'function/emojioneReady',
    'function/htmlFromText',
    'function/textFromHtml',
    'function/trigger',
    'function/calcButtonPosition',
    'prototype/var/EmojioneArea'
],
function($, emojioneReady, htmlFromText, trigger, calcButtonPosition, EmojioneArea) {
    EmojioneArea.prototype.setText = function (str, cb) {
        var self = this;
        emojioneReady(function () {
            var content = htmlFromText(str, self);
            if (typeof cb == "function") {
                return cb(content);
            }
            self.editor.html(content);
            self.content = self.editor.html();
            trigger(self, 'change', [self.editor]);
            calcButtonPosition.apply(self);
        });
        return self;
    }
});