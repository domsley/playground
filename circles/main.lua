function love.load()
	width = love.graphics.getWidth()
	height = love.graphics.getHeight()
	random = love.math.random()

	randomX = {}
	randomY = {}

	for i = 1, 50 do
		table.insert(randomX, love.math.random(1, width))
		table.insert(randomY, love.math.random(1, height))
	end

	x, y, w, h = width / 2, height / 2, 20, 20
end

function love.update(dt)
	for i = 1, 50 do
		local dirX = x - randomX[i]
		local dirY = y - randomY[i]

		local len = math.sqrt(dirX * dirX + dirY * dirY)
		dirX = dirX / len
		dirY = dirY / len

		randomX[i] = randomX[i] + dirX
		randomY[i] = randomY[i] + dirY
	end
end

function love.draw()
	love.graphics.setColor(0, 0.4, 0, 0.4)
	for i = 1, 50 do
		love.graphics.circle("fill", randomX[i], randomY[i], 20, 20)
	end
end
