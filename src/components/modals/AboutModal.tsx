import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="About" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500">
        This is a project forked from -{' '}
        <a
          href="https://github.com/haditorabi/wordle"
          className="underline font-bold"
        >
          check out the code here
        </a>{' '}
        and{' '}
        <a
          href="https://github.com/hannahcode/wordle/"
          className="underline font-bold"
        >
          see the main project here
        </a>
      </p>
    </BaseModal>
  )
}
