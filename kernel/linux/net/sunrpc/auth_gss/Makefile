#
# Makefile for Linux kernel rpcsec_gss implementation
#

obj-$(CONFIG_SUNRPC_GSS) += auth_rpcgss.o

auth_rpcgss-objs := auth_gss.o gss_generic_token.o \
	gss_mech_switch.o svcauth_gss.o gss_krb5_crypto.o

obj-$(CONFIG_RPCSEC_GSS_KRB5) += rpcsec_gss_krb5.o

rpcsec_gss_krb5-objs := gss_krb5_mech.o gss_krb5_seal.o gss_krb5_unseal.o \
	gss_krb5_seqnum.o

