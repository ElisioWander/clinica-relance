import { Popover } from '@headlessui/react'
import { IoChatboxEllipsesOutline } from 'react-icons/io5'
import { Widget } from './index'

export function MyPopover() {
  return (
    <Popover className="fixed bottom-10 right-4 md:-mb-5 md:right-8 flex flex-col items-end z-50 ">
      <Popover.Panel className="animate-goVisible">
        {({ close }) => <Widget onClose={close} />}
      </Popover.Panel>

      <Popover.Button className="h-12 px-3 flex items-center group text-white-100 rounded-full bg-green-300 ">
        <IoChatboxEllipsesOutline className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear ">
          <span className="pl-2">contato</span>
        </span>
      </Popover.Button>
    </Popover>
  )
}
