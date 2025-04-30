# The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

# Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

# Examples (input --> output):
# 255, 255, 255 --> "FFFFFF"
# 255, 255, 300 --> "FFFFFF"
# 0, 0, 0       --> "000000"
# 148, 0, 211   --> "9400D3"

def rgb(r, g, b):
    def clamp(value):
        if value < 0:
            return 0
        elif value > 255:
            return 255
        else:
            return value

    red = clamp(r)
    green = clamp(g)
    blue = clamp(b)

    red_hex = format(red, '02X')
    green_hex = format(green, '02X')
    blue_hex = format(blue, '02X')

    hex_color = red_hex + green_hex + blue_hex

    return hex_color