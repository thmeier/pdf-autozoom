PKG_NAME = pdf-autozoom
BUILD_DIR = build

pkg:
	mkdir -p $(BUILD_DIR)
	zip -r -FS $(BUILD_DIR)/$(PKG_NAME).zip * --exclude '*.git*' \*.md Makefile $(BUILD_DIR)
	mv $(BUILD_DIR)/$(PKG_NAME).zip $(BUILD_DIR)/$(PKG_NAME).xpi
