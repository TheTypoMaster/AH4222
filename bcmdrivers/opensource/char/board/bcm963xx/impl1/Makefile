# Makefile for the bcm963xx board drivers
#


obj-y := board.o cfiflash.o bcm63xx_flash.o bcm63xx_led.o

EXTRA_CFLAGS += -I. -I$(INC_BRCMBOARDPARMS_PATH)/$(BRCM_BOARD) -I$(INC_BRCMDRIVER_PUB_PATH)/$(BRCM_BOARD)

-include $(TOPDIR)/Rules.make

clean:
	rm -f core *.o *.a *.s

