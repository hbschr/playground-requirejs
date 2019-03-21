.PHONY: clean
clean:
	rm -rf dist
	rm -f package-lock.json

.PHONY: distclean
distclean: clean
	rm -rf node_modules
