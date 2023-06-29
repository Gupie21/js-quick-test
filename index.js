function drawContainer(containerSize, childSize, numberOfChildren) {
    var container = document.createElement('div');
    container.style.width = containerSize + 'px';
    container.style.height = 'auto';
    container.style.position = 'relative';
    container.style.overflow = 'hidden';

    var maxRows = Math.floor(containerSize / childSize);
    var maxColumns = Math.floor(containerSize / childSize);
    var maxChildren = maxRows * maxColumns;
    var renderedChildren = Math.min(numberOfChildren, maxChildren);

    var message = document.createElement('div');
    message.textContent = 'Only ' + renderedChildren + ' children can fit inside the container.';
    container.appendChild(message);

    var count = 0;

    for (var i = 0; i < renderedChildren; i++) {
        var child = document.createElement('div');
        child.style.width = childSize + 'px';
        child.style.height = childSize + 'px';
        child.style.backgroundColor = getRandomColor();
        child.style.float = 'left';

        child.addEventListener('mouseover', function () {
            this.style.backgroundColor = getRandomColor();
        });

        child.addEventListener('mouseenter', function () {
            var self = this;
            setTimeout(function () {
                self.style.display = 'none';
                count--;
                updateCount();
            }, 2000);
        });

        container.appendChild(child);
        count++;
    }

    function updateCount() {
        message.textContent = 'Showing ' + count + ' children';
    }

    document.body.appendChild(container);
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Tests
drawContainer(310, 200, 4);
drawContainer(413, 42, 30);
drawContainer(200, 300, 2);
drawContainer(250, 50, 25);
