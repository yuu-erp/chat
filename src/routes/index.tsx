import { accountService } from '@/modules/account/application/services/account.service'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
    const wallets = {
      id: 2,
      name: 'Test',
      address: '1bb71f34aeddc7a3c04ba5a5ac14d65684056806',
      pendingBalance: '',
      balance: '6a94d74f17eb39',
      totalBalance: '6a94d74f17eb39',
      backgroundImage:
        'image://img.m.pro/data/user/0/com.metanode.main/files/Profile-1753422004/meta.wallet/image/1753422128436.png',
      position: 2,
      profileId: 1753422004,
      totalBalanceString: '29999999997176633',
      nodeAddress: '0000000000000000000000000000000000000000',
      isHidden: 0,
      coldBalance: '',
      coldBalanceString: '0',
      publicKey: '',
      privateKey: '',
      seed: '',
      textColor: '#FFFFFF',
      addressBls: '7bd62b0a53f7178d36df7f65a71c9d88923a77e0',
      visa: []
    }
  
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
        }}
      >
        <button
          style={{
            width: '140px',
            height: '54px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'blue',
            color: 'white',
            borderRadius: '14px'
          }}
          onClick={() => accountService.createAccount({
            address: wallets.address,
            name: wallets.name,
            avatar: wallets.backgroundImage,
            isActive: false,
            userID: wallets.address
          })}
        >
          Connect wallet
        </button>
      </div>
    )
  }