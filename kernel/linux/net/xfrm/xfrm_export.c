#include <linux/module.h>
#include <net/xfrm.h>

EXPORT_SYMBOL(xfrm_user_policy);
EXPORT_SYMBOL(km_waitq);
EXPORT_SYMBOL(km_new_mapping);
EXPORT_SYMBOL(xfrm_cfg_sem);
EXPORT_SYMBOL(xfrm_policy_alloc);
EXPORT_SYMBOL(__xfrm_policy_destroy);
EXPORT_SYMBOL(xfrm_lookup);
EXPORT_SYMBOL(__xfrm_policy_check);
EXPORT_SYMBOL(__xfrm_route_forward);
EXPORT_SYMBOL(xfrm_state_alloc);
EXPORT_SYMBOL(__xfrm_state_destroy);
EXPORT_SYMBOL(xfrm_state_find);
EXPORT_SYMBOL(xfrm_state_insert);
EXPORT_SYMBOL(xfrm_state_add);
EXPORT_SYMBOL(xfrm_state_update);
EXPORT_SYMBOL(xfrm_state_check_expire);
EXPORT_SYMBOL(xfrm_state_check_space);
EXPORT_SYMBOL(xfrm_state_check);
EXPORT_SYMBOL(xfrm_state_lookup);
EXPORT_SYMBOL(xfrm_state_register_afinfo);
EXPORT_SYMBOL(xfrm_state_unregister_afinfo);
EXPORT_SYMBOL(xfrm_state_get_afinfo);
EXPORT_SYMBOL(xfrm_state_put_afinfo);
EXPORT_SYMBOL(xfrm_state_delete_tunnel);
EXPORT_SYMBOL(xfrm_replay_check);
EXPORT_SYMBOL(xfrm_replay_advance);
EXPORT_SYMBOL(xfrm_check_selectors);
EXPORT_SYMBOL(__secpath_destroy);
EXPORT_SYMBOL(secpath_dup);
EXPORT_SYMBOL(xfrm_get_acqseq);
EXPORT_SYMBOL(xfrm_parse_spi);
EXPORT_SYMBOL(xfrm4_rcv);
EXPORT_SYMBOL(xfrm4_tunnel_register);
EXPORT_SYMBOL(xfrm4_tunnel_deregister);
EXPORT_SYMBOL(xfrm_register_type);
EXPORT_SYMBOL(xfrm_unregister_type);
EXPORT_SYMBOL(xfrm_get_type);
EXPORT_SYMBOL(xfrm_register_km);
EXPORT_SYMBOL(xfrm_unregister_km);
EXPORT_SYMBOL(xfrm_state_delete);
EXPORT_SYMBOL(xfrm_state_walk);
EXPORT_SYMBOL(xfrm_find_acq_byseq);
EXPORT_SYMBOL(xfrm_find_acq);
EXPORT_SYMBOL(xfrm_alloc_spi);
EXPORT_SYMBOL(xfrm_state_flush);
EXPORT_SYMBOL(xfrm_policy_kill);
EXPORT_SYMBOL(xfrm_policy_bysel);
EXPORT_SYMBOL(xfrm_policy_insert);
EXPORT_SYMBOL(xfrm_policy_walk);
EXPORT_SYMBOL(xfrm_policy_flush);
EXPORT_SYMBOL(xfrm_policy_byid);
EXPORT_SYMBOL(xfrm_policy_list);
EXPORT_SYMBOL(xfrm_dst_lookup);
EXPORT_SYMBOL(xfrm_policy_register_afinfo);
EXPORT_SYMBOL(xfrm_policy_unregister_afinfo);
EXPORT_SYMBOL(xfrm_policy_get_afinfo);
EXPORT_SYMBOL(xfrm_policy_put_afinfo);

EXPORT_SYMBOL_GPL(xfrm_probe_algs);
EXPORT_SYMBOL_GPL(xfrm_count_auth_supported);
EXPORT_SYMBOL_GPL(xfrm_count_enc_supported);
EXPORT_SYMBOL_GPL(xfrm_aalg_get_byidx);
EXPORT_SYMBOL_GPL(xfrm_ealg_get_byidx);
EXPORT_SYMBOL_GPL(xfrm_calg_get_byidx);
EXPORT_SYMBOL_GPL(xfrm_aalg_get_byid);
EXPORT_SYMBOL_GPL(xfrm_ealg_get_byid);
EXPORT_SYMBOL_GPL(xfrm_calg_get_byid);
EXPORT_SYMBOL_GPL(xfrm_aalg_get_byname);
EXPORT_SYMBOL_GPL(xfrm_ealg_get_byname);
EXPORT_SYMBOL_GPL(xfrm_calg_get_byname);
EXPORT_SYMBOL_GPL(skb_icv_walk);
