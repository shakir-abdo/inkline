import { shallowMount } from '@vue/test-utils';
import Column from 'inkline/components/Column';
import { capitalizeFirst } from "inkline/helpers";
import { breakpoints } from 'inkline/constants';

describe('Components', () => {
    describe('Column', () => {
        let wrapper;

        beforeEach(() => {
            wrapper = shallowMount(Column);
        });

        it('should be named correctly', () => {
            expect(Column.name).toEqual('IColumn');
        });

        it('should render correctly', () => {
            expect(wrapper.html()).toMatchSnapshot();
        });

        describe('props', () => {
            breakpoints.slice(1).forEach((breakpoint) => {
                describe(breakpoint, () => {
                    it('should be defined', () => {
                        expect(wrapper.vm[breakpoint]).toBeDefined();
                        expect(wrapper.vm[breakpoint]).toEqual(false);
                    });
                });

                ['first', 'last', 'offset', 'push', 'pull'].forEach((modifierName) => {
                    const modifier = modifierName + capitalizeFirst(breakpoint);
                    describe(modifier, () => {
                        it('should be defined', () => {
                            expect(wrapper.vm[modifier]).toBeDefined();
                            expect(wrapper.vm[modifier]).toEqual(false);
                        });
                    });
                });
            });
        });

        describe('computed', () => {
            describe('classes()', () => {
                it('should return empty classes array if no active properties', () => {
                    expect(wrapper.vm.classes).toEqual([]);
                });

                it('should return classes based on active properties', () => {
                    wrapper.setProps({
                        xs: 12,
                        firstXs: true,
                        offsetXs: 12
                    });

                    expect(wrapper.vm.classes).toEqual(['-xs-12', '-first-xs', '-offset-xs-12'])
                });
            });
        });
    });
});
